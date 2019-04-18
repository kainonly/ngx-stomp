import {IClientOptions} from 'mqtt';

export interface InitializaOption {
  namespace: string;
  brokerUrl?: any;
  opts?: IClientOptions;
}
