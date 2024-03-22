import cors from 'cors';
import express from 'express';
import http from 'http';
import helmet from 'helmet';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import registerRoutes from './routes';
import addErrorHandler from './middleware/error-handler';

export default class App {
	public express: express.Application;
	private userData: { [key: string]: string } = {}; 
	public httpServer: http.Server;

	public async init(): Promise<void> {
		const { NODE_ENV } = process.env;
		this.express = express();
		this.httpServer = http.createServer(this.express);

		// add all global middleware like cors
		this.middleware();

		// // register the all routes
		this.routes();

		// add the middleware to handle error, make sure to add if after registering routes method
		this.express.use(addErrorHandler);

		// In a development/test environment, Swagger will be enabled.
		if (NODE_ENV && NODE_ENV !== 'prod') {
			this.setupSwaggerDocs();
		}
	}

	/**
	 * here register your all routes
	 */
	private routes(): void {
		this.express.get('/', this.basePathRoute);
		this.express.get('/web', this.parseRequestHeader, this.basePathRoute);
		this.express.post('/registerUser', this.parseRequestHeader, this.registerUser);
		this.express.get('/getUser', this.parseRequestHeader, this.getUserData);
		this.express.use('/', registerRoutes());
	}

	/**
	 * here you can apply your middlewares
	 */
	private middleware(): void {
		// support application/json type post data
		// support application/x-www-form-urlencoded post data
		// Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
		this.express.use(helmet({ contentSecurityPolicy: false }));
		this.express.use(express.json({ limit: '100mb' }));
		this.express.use(
			express.urlencoded({ limit: '100mb', extended: true }),
		);
		// add multiple cors options as per your use
		const corsOptions = {
			origin: [
				'http://localhost:8080/',
				'http://example.com/',
				'http://127.0.0.1:8080',
			],
		};
		this.express.use(cors(corsOptions));
	}

	private parseRequestHeader(
		req: express.Request,
		res: express.Response,
		next: Function,
	): void {
		// parse request header
		// console.log(req.headers.access_token);
		next();
	}

	private basePathRoute(
		request: express.Request,
		response: express.Response,
	): void {
		response.json({ message: 'base path' });
	}

	private async registerUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): Promise<void> {
    try {
        const { email, username, password, confirmPassword } = req.body;
        
        // Perform validation checks
        if (!email || !username || !password || !confirmPassword) {
             res.status(400).json({ error: 'Please provide all required fields' });
        }

        if (password !== confirmPassword) {
             res.status(400).json({ error: 'Passwords do not match' });
        }

				this.userData.email = email;
				this.userData.username = username;
				this.userData.password = password;
        // Return success message
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        next(error); // Pass error to error handler middleware
    }
}

private getUserData(
		req: express.Request,
		res: express.Response
): void {
		try {
				// Retrieve data from in-memory storage
				const { email, username, password } = this.userData;

				res.json({ email, username, password });
		} catch (error) {
				console.error('Error retrieving user data:', error);
				res.status(500).json({ error: 'Internal server error' });
		}
}

public start(port: number): void {
		this.express.listen(port, () => {
				console.log(`Server is running on port ${port}`);
		});
}



	private setupSwaggerDocs(): void {
		this.express.use(
			'/docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerDocument),
		);
	}
}
