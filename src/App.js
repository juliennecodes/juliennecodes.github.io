import { HashRouter as Router, Route, Switch} from "react-router-dom";
import { projects } from "./contents/projects";
import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage/Homepage";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />

            {projects.map((project, index) => {
              return (
                <Route exact path={`/${project.url}`} key={index}>
                  <ProjectPage project={project} prev={projects[index + 1]} next={projects[index - 1]}/>
                </Route>
              );
            })}
            
          </Switch>
        </main>

        <footer>Copyright &copy; 2021 Julienne San Luis</footer>
      </Router>
    </div>
  );
}



export default App;
