import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style.css';
import {Card, Button, CardGroup} from 'react-bootstrap';
import img1 from '../../../assets/img/calculadora.png';
import img2 from '../../../assets/img/todolist.jpg';
import img3 from '../../../assets/img/jogoMemoria.png';


const data = [
    {
        id: 1,
        name: 'Calculadora',
        description: 'Claculadora com HTML, CSS and JS',
        url: '',
        img: img1
    },
    {   
        id: 2,
        name: 'To Do list',
        description: 'Aplicativo To Do List com React',
        url: '',
        img: img2
    },
    {
        id: 3,
        name: 'Jogo da Memória',
        description: 'Jogo da Memória usando HTML,CSS e JS',
        url: '',
        img: img3
    }
];


export default function Item(){
    return(
        <CardGroup>
            <ul className="cards">
            {data.map( ( {id, name, description, url, img}) => (
                <li key={id} className="li-card" >
                <Card data-aos="flip-up" data-aos-offset="150" className="card-item">
                    <Card.Img className="card-img" variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="card-text">
                       {description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button className="card-button" href={url} target="_blank" variant="dark">Mais Detalhes</Button>
                    </Card.Footer>
                </Card>
                </li>
                ))}
            </ul>
        </CardGroup>
    )
}