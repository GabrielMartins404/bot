import { Server } from '@overnightjs/core';
import express, { Application } from 'express';
import { config } from './config';
import { AiController } from './controllers/AiController';
import bodyParser from 'body-parser';

export class SetupServer extends Server {
  //Adiociona o construtor para definir porta 3000 por padrão
  constructor() {
    super(config.nodeEnv === 'development');
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))
    this.setupControllers()
  }

  // Inicia o servidor
  public init(): void {
    this.app.listen(config.port, () => {
      console.log("Server listening in port ", config.port)
    })
  }

  public getApp(): Application{
    return this.app
  }

  private setupControllers(): void {
    const aiController = new AiController();
    this.addControllers([aiController]);
  }
}
