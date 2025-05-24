import { useEffect, useState, useRef } from 'react';
import './App.css';
import { useDetail } from './hooks/useData';
import type { RandomUserApiResponse, UserResult } from './types/api.types';
import styles from "./components/mainContent/mainContent.module.css";

function App() {
  const { data, isLoading } = useDetail<RandomUserApiResponse>("api?results=100");
  const users: UserResult[] = data?.results || [];
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onChange = (entries: IntersectionObserverEntry[]) => {
      const element = entries[0];
      if (!element) return;
      if (element.isIntersecting) {
        setShow(true);
      }
    };

    const observer = new IntersectionObserver(onChange
    , {
      rootMargin: "10px"
    });

    observer.observe(document.querySelector("#LazyCard")!);

    
  }, []);

  return (
    <main className={styles.container}>
      <h1><strong>INTERSECTION OBSERVER DEMO MOIBALDENEGRO</strong> <span> Scroll para ver las card</span></h1>
      <div id="LazyCard" />
      {show && (
        <ul>
          {users.map((user) => (
            <li key={user.login.uuid}  >
              <img src={user.picture.thumbnail} alt="User Thumbnail" />
              <p>{`${user.name.first} ${user.name.last}`}</p>
              <p>{user.email}</p>
              <p>{user.location.city}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;