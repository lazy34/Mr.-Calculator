import { signal } from "@preact/signals";
import { Header } from "../components/header.tsx";
import { Form } from "../islands/Forms.tsx";
import { Button } from "../islands/Button.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <div id="container">
        <div class="input-section">
          <div className="fill-ip-section">
            <Form width="80%" readOnly={false} />
            <Form width="80%" readOnly={false} />
          </div>
          <div className="operation-section">
              <Button value="+" width="90px" label="x+y"/>
              <Button value="-" width="90px" label="x-y"/>
              <Button value="*" width="90px" label="x*y"/> 
              <Button value="/" width="90px" label="x/y"/>
              <Button value="%" width="90px" label="x%y"/>
              <Button value="^" width="90px" label="x^y"/>
              <Button value="=" width="100%" label="CALCULATE"/>            
          </div>
        </div>
        <div className="output-section">
        <Form width="10%" readOnly={true}/>
        </div>
      </div>
    </>
  );
}