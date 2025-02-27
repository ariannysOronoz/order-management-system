import {createRoot} from "react-dom/client";
import Test from './Test';

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Test/>);
} else {
  throw new Error('No root found');
}
