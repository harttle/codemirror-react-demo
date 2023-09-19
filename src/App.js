import './App.css';
import CodeMirror from '@uiw/react-codemirror';
import { Liquid } from "codemirror-lang-liquid";
import { abcdef } from '@uiw/codemirror-themes-all';

const liquidTemplate = `{% layout "main.liquid" with "dark", url: "/" %}
{%- assign people = "alice, bob, carol" | split: ", " -%}

<ul>
{% for i in (0..2) reversed limit:people.size offset:1 %}
  <li><a href="{{people[i] | prepend: "http://example.com/"}}">
    {{ people[i] | capitalize | append: empty }}
  </a></li>
{% endfor %}
</ul>

{% liquid
  render "footer.liquid" with "dark"
  capture about
    echo "This is a Liquid language demo"
  endcapture
  echo about
%}

{% comment %}
{% assign foo="bar" %}
{% endcomment %}`

function App() {
  return (
    <div className="App">
      <CodeMirror value={liquidTemplate}
        theme={abcdef}
        height="500px"
        extensions={[Liquid()]}
      />
    </div>
  );
}

export default App;
