import { from } from 'env-var';
import { config } from 'dotenv';

config({ path: '.env' });

export class ConfigService {
  public constructor(private processEnv = process.env) {
    Object.freeze(this);
  }
  private env = from(this.processEnv);
  public readonly NODE_ENV = this.env.get('NODE_ENV').required().asString();

  public readonly PORT = this.env.get('PORT').required().asPortNumber();
  public readonly IS_GRPC = this.env.get('IS_GRPC').required().asBool();

  public readonly DB_HOST = this.env.get('DB_HOST').required().asString();

  public readonly DB_DATABASE = this.env
    .get('DB_DATABASE')
    .required()
    .asString();

  public readonly DB_USERNAME = this.env
    .get('DB_USERNAME')
    .required()
    .asString();

  public readonly DB_PASSWORD = this.env
    .get('DB_PASSWORD')
    .required()
    .asString();

  public readonly DB_PORT = this.env.get('DB_PORT').required().asIntPositive();

  public readonly API_URL = this.env.get('API_URL').required().asString();

  public readonly API_KEY = this.env.get('API_KEY').required().asString();
}
