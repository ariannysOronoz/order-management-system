import React from "react";
import './BoxWithNameAndValue.css';
import './Global.css';

interface BoxWithNameAndValueProps {
    name:string,
    value:string
  }
  
  export default function BoxWithNameAndValue({ name, value }:BoxWithNameAndValueProps) {
    return (
      <div className="boxWithNameAndValue global-flex-center responsive-tablet responsive-large">
        <div className="box-common global-card-style global-flex-center">{name}</div>
        <div className="box-common global-card-style global-flex-center">{value}</div>
      </div>
    );
  }