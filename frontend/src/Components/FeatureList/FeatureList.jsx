import React from 'react';
import './FeatureList.css';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const features = 
[
  {
    title: "Billing",
    description: "Manage your billing efficiently with our streamlined billing feature that automates invoicing, payment processing, and tracking.",
    imageUrl: "https://ik.imagekit.io/ec18yjhnk/XsCBhaLzl9akORZcaXdeZEOwW273/d6b1aacf-6434-4155-8dfc-44c67166bec7.png",
  },
  {
    title: "Customers",
    description: "Easily manage your customers with comprehensive profiles, allowing efficient communication and tracking of all interactions.",
    imageUrl: "https://ik.imagekit.io/ec18yjhnk/XsCBhaLzl9akORZcaXdeZEOwW273/216291a5-2453-436e-bff6-c717eeb83aa3.png",
  },
  {
    title: "Finance",
    description: "Stay on top of your finances with detailed insights, tracking expenses, revenues, and producing financial reports.",
    imageUrl: "https://ik.imagekit.io/ec18yjhnk/XsCBhaLzl9akORZcaXdeZEOwW273/7811cdf5-df52-418d-8f5e-afd6c19540db.png",
  },
  {
    title: "Inventory",
    description: "Manage your inventory efficiently, track stock levels, and generate alerts for low stock to prevent shortages.",
    imageUrl: "https://ik.imagekit.io/ec18yjhnk/XsCBhaLzl9akORZcaXdeZEOwW273/275e9768-6fa4-40ae-a0e6-057157ec5d4a.png",
  },
  {
    title: "Sales",
    description: "Boost your sales efforts with powerful analytics and tracking tools to monitor sales performance and strategies.",
    imageUrl: "https://ik.imagekit.io/ec18yjhnk/XsCBhaLzl9akORZcaXdeZEOwW273/7d3045a5-a96e-482f-bdd3-b56dcb04b4a0.png",
  },
  {
    title: "Reports",
    description: "Generate comprehensive reports that provide vital insights and data analyses to help inform business decisions.",
    imageUrl: "https://ik.imagekit.io/ec18yjhnk/XsCBhaLzl9akORZcaXdeZEOwW273/8865b927-d54d-44d9-bf16-33289412dbd3.png",
  },
];

const FeatureSection = ({ title, description, imageUrl, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between p-6 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <hr className='my-4 border-black' />
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center">
        <img src={imageUrl} alt={`${title} illustration`} className="w-40 h-40 rounded-full shadow-lg object-cover" />
      </div>
      {/* <hr className="my-4 2px border-black" /> */}
    </div>
  );
};
const FeatureList = () => {
  return (
    <div className="max-w-7xl mx-auto" style={{ padding: '5%' }}>
      {features.map((feature, index) => (
        <FeatureSection
          key={feature.title}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
};
<div className="container-hr">
  <hr />
</div>

export default FeatureList;
