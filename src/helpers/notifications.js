import { notification } from 'antd';
import errorMessage from './errorMessage';

export const error = (error) => notification.error({ message: errorMessage(error) });

export const warning = (message) => notification.warning({ message });

export const info = (message) => notification.info({ message });
