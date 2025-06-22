import './App.css';

// Componentes de navegación y principales
import {Navbar} from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import {Projects} from './components/Projects/Projects';
import {Principles} from './components/Principles/Principles';
import {DesignTools} from './components/ToolsGrid/DesignTools/DesignTools';
import {CodeTools} from './components/ToolsGrid/CodeTools/CodeTools';

// Componentes de ProjectOverview 
import {Cover} from './ProjectOverview/Cover/CoverSection';
import {CoreDetails} from './ProjectOverview/CoreSections/CoreDetails';
import {Grid} from './ProjectOverview/ProcessDesign/GridWireframes/Grid';
import {ColorPalette} from './ProjectOverview/DesignSystem/ColorPalette/ColorPalette';
import {TipographySection} from './ProjectOverview/DesignSystem/TipographySection/TipographySection';
import {AlternatingProcessGrid} from './ProjectOverview/ProcessDesign/AlternatingProcessGrid/AlternatingProcessGrid';
import {RedirectionSection} from './ProjectOverview/Navigation/Redirection/RedirectionSection';
import {Footer} from './components/Footer/Footer';

// Contenido y datos
import {initialSection, designSolutionsContent, finalSection} from './ProjectOverview/CoreSections/CoreContent';
import {wireframes, hiPiPrototype, assetsUi, keyDisplay} from './ProjectOverview/ProcessDesign/GridWireframes/ItemContent';
import {spaces, interaction} from './ProjectOverview/ProcessDesign/AlternatingProcessGrid/AlternatingProcessGridContent';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Projects/>
      <Principles/>
      <Tools/>
    </div>
  );
}


export default App;
