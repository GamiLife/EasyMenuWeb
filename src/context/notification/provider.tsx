import React from 'react';

import {
  INotificationProvider,
  NotificationContext,
  defaultNotificationValues,
} from './context';

const NotificationProvider = ({ children }: INotificationProvider) => {
  const [isEnabledFloating, setIsEnabledFloating] = React.useState(
    defaultNotificationValues.isEnabledFloating
  );

  const [notificationText, setNotificationText] = React.useState(
    defaultNotificationValues.notificationText
  );

  React.useEffect(() => {
    setTimeout(() => {
      setIsEnabledFloating(false);
    }, 3000);
  }, [isEnabledFloating]);

  return (
    <NotificationContext.Provider
      value={{
        isEnabledFloating,
        notificationText,
        setIsEnabledFloating,
        setNotificationText,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
