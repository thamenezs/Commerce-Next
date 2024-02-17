import React from "react";
import { Inter } from "next/font/google";

interface InfosProps {
  textTop: string;
  title: string;
  subtitle: string;
  button: string;
}

const Infos: React.FC<InfosProps> = ({
  textTop,
  title,
  subtitle,
  button,
}) => {
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-gray-300">{textTop}</p>
            <h1 className="">{title}</h1>
            <span>{subtitle}</span>
            <button>{button}</button>
        </div>
    );
};

export default Infos;
