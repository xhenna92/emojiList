import React, {PureComponent} from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import emojiList from "./emojiList.json";
import filterEmoji from "./filterEmoji";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleSearchChange = event => {
    // TODO: implement search
  };

  render() {
    return <div>
      <Header/>
      <SearchInput textChange={this.handleSearchChange}/>
      <EmojiResults emojiData={emojiList}/>
    </div>;
  }
}
export default App;
