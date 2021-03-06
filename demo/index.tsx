import * as React from "react";
import * as ReactDOM from "react-dom";
import OneCron from "../src";
import "./index.css";

type State = {
  cronExpression: string;
};
type Prop = {
  showCheckbox?: boolean;
  lang?: string;
  onChange?: () => void;
  cronExpression?: string;
};
enum LangEnum {
  zh_CN = "zh_CN",
  en_US = "en_US",
  zh_TW = "zh_TW"
}
class App extends React.Component<Prop, State> {
  state: State = {
    cronExpression: "0 0 0 * * ?"
  };
  handleChange(exp) {
    this.setState({
      cronExpression: exp.format()
    });
    console.log(exp, exp.format());
  }
  render() {
    return (
      <div style={{ margin: 50 }}>
        <OneCron
          showCheckbox={true}
          lang={LangEnum.zh_TW}
          onChange={exp => this.handleChange(exp)}
          cronExpression={this.state.cronExpression}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
