declare module "@tawk.to/tawk-messenger-react" {
  import { ComponentType, RefObject } from "react";

  interface TawkMessengerRef {
    toggle: () => void;
    minimize: () => void;
    // Add any other methods
  }

  interface TawkMessengerProps {
    propertyId: string;
    widgetId: string;
    onLoad?: () => void;
  }

  const TawkMessengerReact: ComponentType<
    TawkMessengerProps & { ref?: RefObject<TawkMessengerRef> }
  >;

  export default TawkMessengerReact;
}
