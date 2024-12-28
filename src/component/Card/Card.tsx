import React from "react";
import { Link } from 'react-router-dom';
import {Border, Dots} from './style'
import { Button, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';

interface CardData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }

interface CardProps {
    card: CardData;
  }



  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
  ];

const Card: React.FC<CardProps> = ({card}) => {
  return (
    <Border className="relative">
    <Link to={`/detail/${card.id}`} className="mx-4 overflow-hidden hover:shadow-xl transition duration-300 no-underline">
        <div className="w-[350px]"> 
            <img src={card.imageUrl} alt="Card image" className="max-w-[240px] w-full rounded-[10px]" />
            <div className="p-4 max-w-[250px]">
                <h2 className="text-[#2A3D4B] text-[16px] font-700 mb-[16px]">{card.title}</h2>
                <p className="text-[#303940] text-[14px] font-400 tracking-[-0.084px] line-clamp-3">{card.description}</p>
            </div>
        </div>
    </Link>
        <div className="absolute top-6 right-5">
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button className="py-0 px-2">
                <div className="flex items-center gap-1">
                  <div className="bg-black w-1 h-1 rounded-full"></div>
                  <div className="bg-black w-1 h-1 rounded-full"></div>
                  <div className="bg-black w-1 h-1 rounded-full"></div>
              </div>
            </Button>
          </Dropdown>
        </div>
    </Border>
  );
};

export default Card;
