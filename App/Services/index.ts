import {AsyncStorage} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';

import {AccountGateway} from '../Gateways/AccountGateway';

import {AccountService} from './AccountService';

const restConnector = axios.create({baseURL: Config.API_URL});

const accountGateway = new AccountGateway(restConnector, AsyncStorage);

export const accountService = new AccountService(accountGateway);
