import './CoreConcepts.css';

export default function CoreConcepts({imagenPath, title, description}){  
  return(<div>
    <img src={imagenPath} alt="..." />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>)
}


