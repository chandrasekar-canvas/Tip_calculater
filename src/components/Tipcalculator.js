
import React, { useState } from 'react'; 
import '../App.css'; 
import TipInput from './Tipinput'; 
import TipResult from './TipResult'; 
export default function TipCalculator() { 

	// use state use  
	const [billAmount, setBillAmount] = useState(''); 
	const [tipPercent, setTipPercent] = useState('15'); 
	const [numberOfPerson, setNumberOfPerson] = useState('1'); 

	const handleReset = () => { 
		setBillAmount(''); 
		setTipPercent('15'); 
		setNumberOfPerson('1'); 
	} 

	return ( 
		<div className="container"> 
		{/* components tip input ... */}
			<TipInput 
				billAmount={billAmount} 
				setBillAmount={setBillAmount} 
				tipPercent={tipPercent} 
				setTipPercent={setTipPercent} 
				numberOfPerson={numberOfPerson} 
				setNumberOfPerson={setNumberOfPerson} 
			/> 
			<TipResult 
				billAmount={billAmount} 
				tipPercent={tipPercent} 
				numberOfPerson={numberOfPerson} 
				handleReset={handleReset} 
			/> 
		</div> 
	); 
} 
