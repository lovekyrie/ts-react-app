import React from "react";
import {Button} from "antd"

interface Greeting {
  name:string;
  firstName:string;
  lastName:string;
}

const Hello=(props:Greeting)=><Button> Hello {props.name} </Button>
//函数组件会多一个children属性，然后在给组件默认赋值的时候有自动提示，但是需要给未提供的属性增加可选类型
// const Hello:React.FC<Greeting> = ({name,firstName,lastName,children})=><Button> Hello {name} </Button>

Hello.defaultProps={
  firstName:'',
  lastName:''
}
export default Hello