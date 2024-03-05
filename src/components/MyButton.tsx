"use client";

type MyProps = { content: string; }

// Any component in your codebase
function MyButton(props: MyProps) {
  return <button onClick={() => {
    console.log('I am here');
  }}>{props.content}</button>;
}

export default MyButton;

