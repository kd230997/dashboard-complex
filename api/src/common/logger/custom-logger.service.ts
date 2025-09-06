import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CustomLogger extends ConsoleLogger {
  private logFilePath: string;

  constructor() {
    super();
    this.logFilePath = path.join(process.cwd(), 'logs', 'app.log');

    // ensure "logs" folder exists
    const logDir = path.dirname(this.logFilePath);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  private writeToFile(message: string) {
    fs.appendFileSync(this.logFilePath, message + '\n', { encoding: 'utf8' });
  }

  log(message: string) {
    super.log(message);
    this.writeToFile(`[LOG] ${new Date().toISOString()} - ${message}`);
  }

  error(message: string, trace?: string) {
    super.error(message, trace);
    this.writeToFile(`[ERROR] ${new Date().toISOString()} - ${message}\n${trace ?? ''}`);
  }

  warn(message: string) {
    super.warn(message);
    this.writeToFile(`[WARN] ${new Date().toISOString()} - ${message}`);
  }
}
