import React from "react";
import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider} from "@azure/msal-react";
import {loginRequest} from "./auth-config";
import {NextUIProvider} from "@nextui-org/react";

const WrappedView = () => {
  const {instance} = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance.loginRedirect({
      ...loginRequest,
      prompt: "create"
    })
    .catch((error) => console.error(error));
  }

  return (
    <div>
      <AuthenticatedTemplate>
        {activeAccount ? (
          <div>
            <h1>Welcome {activeAccount.name}</h1>
            <button onClick={() => instance.logout()} >Logout</button>
          </div>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleRedirect}>Login</button>
      </UnauthenticatedTemplate>
    </div>
  )
}

const App = ({instance}) => {
  return (
    <MsalProvider instance={instance}>
      <WrappedView />
    </MsalProvider>
  )
}

export default App;