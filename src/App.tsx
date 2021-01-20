import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TypeOfTag } from 'typescript';

const name = "hello";


let username = "Hello"; 
let dummyNum = 2;
let bool = true;


let array1 = [true, false, true];
let array2 = [0, 1, "hello", true];


interface NAME {
  first: string;
  last: string | null;
}
let hoge: NAME = { first: "Yamada", last: null };


const func1 = (x: number, y: number): number => {
  return x + y;

};


// Intersection Types ２つのタイプを結合してオブジェクトを作ることができる
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Osaka",
  username: "omitsu",
  password: "12345",
}


// Union Types データ型を制限することができる
let value: boolean | number
value = true
value = 10

let arrayUnion: (number | string)[];
arrayUnion = [1, 2, "hello"];


// Literal Types 決められたものしか代入できない
let company: "Faccebook" | "Google" | "Amazon"
company = "Google";
// company = "Apple";

let memory: 256 | 512;
memory = 256;


// typeof 宣言済の変数を継承する
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";
// msg2 = 1

let animal = {cat: "small cat"}
let newAnimal: typeof animal = {cat: "bigcat"};




function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
