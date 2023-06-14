import React from "react";
function App() {
  return (
    <div
      style={{
        fontFamily: "poppins",
        padding: "0",
        margin: "0",
        height: "100vh",
        backgroundColor: "#D661FF",
      }}
    >
      <header
        style={{
          height: "10%",
        }}
      >
        <nav
          style={{
            height: "100%",
          }}
        >
          <ul
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <li
              style={{
                cursor: "pointer",
                listStyle: "none",
              }}
            >
              <a
                href="#"
                style={{
                  color: "black",
                }}
              >
                Link 1
              </a>
            </li>
            <li
              style={{
                cursor: "pointer",
                listStyle: "none",
              }}
            >
              <a
                href="#"
                style={{
                  color: "black",
                }}
              >
                Link 2
              </a>
            </li>
            <li
              style={{
                cursor: "pointer",
                listStyle: "none",
              }}
            >
              <a
                href="#"
                style={{
                  color: "black",
                }}
              >
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section style={{ display: "grid", placeItems: "center" }}>
        <main
          style={{
            backgroundColor: "white",
            border: "2px solid black",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "95%",
            padding: "2%",
            filter: "drop-shadow(10px 10px 0 black)"
          }}
        >
          <h1
            style={{
              padding: "2%",
              border: "2px solid black",
              borderRadius: "5px",
              backgroundColor: "#FF81CC",
              fontFamily: "Black Han Sans",
              fontSize: "4em",
            }}
          >
            Inline Styling Mess
          </h1>
          <h3
            style={{
              padding: "2%",
              backgroundColor: "#4ED688",
              fontFamily: "Jura",
              fontSize: "2em",
              border: "2px solid black",
              borderRadius: "5px",
            }}
          >
            A CSS Adventure
          </h3>
          <section>
            <div>
              <p
                style={{
                  padding: "2%",
                  border: "2px solid black",
                  borderRadius: "5px",
                  backgroundColor: "#FFCB46",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
        </main>
      </section>
      <footer style={{
          height: "10%"
        }}>
        <section style={{
            height: "100%",
          }}>
          <ul style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}>
            <li style={{
                cursor: "pointer",
                listStyle: "none",
              }}>
              <a href="mailto:codetombomb@gmail.com">Email Me!</a>
            </li>
            <li style={{
                cursor: "pointer",
                listStyle: "none",
              }}>
              <a href="https://github.com/codetombomb">GitHub</a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
export default App;
