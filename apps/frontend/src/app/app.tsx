import { useEffect, useState } from "react";

export const App = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const getData = async () => {
      const url = process.env.NX_PUBLIC_NGINX_HOST;
      const res = await fetch(`${process.env.NX_PUBLIC_NGINX_HOST}/api`);
      const { message } = await res.json();
      setMessage(message);
    };
    getData();
  }, []);

  return message.length ? (
    <div className="article">
      <h1 className="message">{message}</h1>
      <footer className="footer">
        Created by <a href="https://github.com/Ali-Jahankah">Ali Jahankhah</a>
      </footer>
    </div>
  ) : (
    <div>Server is not connected</div>
  );
};

export default App;
