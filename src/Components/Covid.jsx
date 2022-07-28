import React, { useEffect, useState } from 'react';
import "./covid.css";
const CovidData = () => {
        const [country, setCountry] = useState('');
        const [cases, setCases] = useState('');
        const [deaths, setDeaths] = useState('');
        const [recovered, setRecovered] = useState('');
        const [todayCases, setTodayCases] = useState('');
        const [todayDeaths, setTodayDeaths] = useState('');
        const [todayRecovered, setTodayRecovered] = useState('');
        const setData = ({
            country,
            cases,
            deaths,
            recovered,
            todayCases,
            todayDeaths,
            todayRecovered
        }) => {
            setCountry(country);
            setCases(cases);
            setRecovered(recovered);
            setDeaths(deaths);
            setTodayCases(todayCases);
            setTodayDeaths(todayDeaths);
            setTodayRecovered(todayRecovered);
        };
        useEffect(() => {
            fetch("https://disease.sh/v3/covid-19/countries/india")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                });
        }, []);
        const [userInput, setUserInput] = useState('');
        const inputEvent = (data) => {
            const result = data.target.value;
            console.log(result);
            setUserInput(result);
            // setData(result);
        }
        const submit = async(e) => {
            e.preventDefault();
            fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                });
        };
        return (
             <>
            <div className = "Card" >
            <h1 > Covid - 19 Tracker </h1>  
            <div className = "search" >
            <form onSubmit = { submit } >
            <input type = "text"
            className = "search-bar"
            onChange = { inputEvent }
            placeholder = "Enter Country Name" / >
            <button type = "submit" > <svg stroke = "currentColor"
            fill = "currentColor"
            viewBox = "0 0 1024 1024"
            height = "1.5em"
            width = "1.5em"
            xmlns = "http://www.w3.org/2000/svg">
            <path d = "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" >
            </path></svg>
            </button > </form >
             </div> 
             <div className = "input_Info">
            <p> Country Name: { country } </p> 
            <p> Cases: { cases } </p> 
            <p> Deaths: { deaths } </p> 
            <p> Recovered: { recovered } </p>
            <p> Cases Today: { todayCases } </p> 
            <p> Deaths Today: { todayDeaths } </p> 
            <p> Recovered Today: { todayRecovered } </p> 
            <p> </p>
            </div>
            </div> 
            </>);
        }
        export default CovidData;