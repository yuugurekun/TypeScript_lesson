import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TypeOfTag } from "typescript";
import Data from "./data.json";
import TestComponent from "./TestComponent";

// json型推論
type USERS = typeof Data;

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
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Osaka",
  username: "omitsu",
  password: "12345",
};

// Union Types データ型を制限することができる
let value: boolean | number;
value = true;
value = 10;

let arrayUnion: (number | string)[];
arrayUnion = [1, 2, "hello"];

// Literal Types 決められたものしか代入できない
let company: "Faccebook" | "Google" | "Amazon";
company = "Google";
// company = "Apple";

let memory: 256 | 512;
memory = 256;

// typeof 宣言済の変数を継承する
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";
// msg2 = 1

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "bigcat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;

// enum 自動的に連番を生成
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Mac,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Windows,
};

// 型の互換性
const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
// let comp4: "test" = comp3;

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

// funcComp1 = funcComp2;
// funcComp2 = funcComp1;

// Generics(GEN) ジェネリックス
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = {
  item: "hello",
};
const gen1: GEN<number> = { item: 3 };

interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = { item: "hello" };
// const gen5: GEN2<boolean> = { item: true};

function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen("test");

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="Merry Xmas!!!" />
      </header>
    </div>
  );
};

export default App;
