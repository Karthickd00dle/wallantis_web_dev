import React from 'react'
import "./style.scss";
import { NormalNavigate } from 'component/common';
import Accordion from 'react-bootstrap/Accordion';

export const FAQ = () => {
    return (
        <div>
        <div>
            <NormalNavigate navigationStyle="faq-head"><div className='mainmenu'><label>Frequently asked questions </label></div></NormalNavigate>
        </div>
        <div>
         <Accordion defaultActiveKey="0">
      <Accordion.Item className="item1" eventKey="0">
        <Accordion.Header className="according-header"><h6>Can I get wallpaper for my size requirement  ?</h6></Accordion.Header>
        <Accordion.Body className="according-body">
       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="according-header"><h6>Can I get wallpaper customized ?</h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="2">
        <Accordion.Header className="according-header"><h6>Can I change colors for my design ?</h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="3">
        <Accordion.Header className="according-header"><h6>How does the ordering process works ?</h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header className="according-header"><h6>How should I measure my wall ?</h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header className="according-header"><h6>How do I clean wallpapers ?</h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header className="according-header"><h6>How do I paste my wallpaper ?</h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header className="according-header"><h6>Can I follow ypu on social media ?</h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header className="according-header"><h6>What type of wallpapers works best for my kitchen and Bedrooms ?</h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header className="according-header"><h6>What are the advantages of using wallpapers ? </h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="10">
        <Accordion.Header className="according-header"><h6>How long should it take for my wallpaper to dry out naturally ? </h6></Accordion.Header>
        <Accordion.Body className="according-body">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo purus. Est pellentesque amet donec massa sit nisl auctor. Euismod massa semper porta feugiat erat non velit bibendum eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque auctor mattis euismod augue cum vestibulum. Tristique dictum eu cras mauris nam et.</p>
        </Accordion.Body>
      </Accordion.Item>


      
    </Accordion>
    <div className="gh">

    </div>
    </div>
    </div>
    );
  };
