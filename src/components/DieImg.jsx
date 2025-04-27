import One from '../assets/dice-1.png';
import Two from '../assets/dice-2.png';
import Three from '../assets/dice-3.png';
import Four from '../assets/dice-4.png';
import Five from '../assets/dice-5.png';
import Six from '../assets/dice-6.png';

function DieImg({diePoints}){
    
    return (
		<>
			{ 
				diePoints === 1 ? <img src={One} /> : 
				diePoints === 2 ? <img src={Two} /> : 
				diePoints === 3 ? <img src={Three} /> : 
				diePoints === 4 ? <img src={Four} /> : 
				diePoints === 5 ? <img src={Five} /> : 
				<img src={Six} />
			} 
		</>	 
		
	);
}

export default DieImg;
