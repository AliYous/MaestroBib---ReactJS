import React from 'react';
import RestaurantData from '../data/commonBib.json'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row, Table
} from 'reactstrap';

const Restaurant = ({name, address}) => {
 
    return (
      <Table  bordered hover>
				<thead>
					<tr>
						<th>Nom</th>
						<th>Adresse</th>
						<th>Telephone</th>
						<th>Prix</th>
						<th>Type</th>
						<th>Experience</th>
					</tr>
				</thead>
				{RestaurantData.map(restaurantDetail => (
					<tbody>
						<tr>
							<td>{restaurantDetail.name}</td>
							<td>{restaurantDetail.address}</td>
							<td style={{'width': 160}}>{restaurantDetail.phone}</td>
							<td style={{'width': 110}}>{restaurantDetail.price}</td>
							<td>{restaurantDetail.type}</td>
							<td>{restaurantDetail.experience}</td>
						</tr>
					</tbody>
				))}
			</Table>
    );
  }


export default Restaurant;
