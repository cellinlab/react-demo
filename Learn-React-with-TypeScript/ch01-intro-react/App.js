import { Alert } from "./Alert";

export default function App() {
  return (
    <div className="App">
      <Alert
        type="informatoin"
        heading="Success"
        closeable
        onClose={() => {
          console.log("closed");
        }}
      >
        Everything is really good!
      </Alert>
    </div>
  );
}
