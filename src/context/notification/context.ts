import React from 'react';

export interface INotificationContext {
  isEnabledFloating: boolean;
  notificationText: string;
  setIsEnabledFloating: (value: boolean) => void;
  setNotificationText: (value: string) => void;
}

export interface INotificationProvider {
  children: React.ReactNode;
}

export const defaultNotificationValues = {
  isEnabledFloating: false,
  notificationText: '',
};

export const defaultNotificationSetter = {
  setIsEnabledFloating: () => {
    return;
  },
  setNotificationText: () => {
    return;
  },
};

export const defaultNotificationContext = {
  ...defaultNotificationValues,
  ...defaultNotificationSetter,
};

export const NotificationContext = React.createContext<INotificationContext>({
  ...defaultNotificationContext,
});
