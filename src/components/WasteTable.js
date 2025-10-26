import React from "react";
import Table from "react-bootstrap/Table";
import { FaDog } from "react-icons/fa";

export default function WasteRemovalTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="6">
            Pet Waste Removal Service Rates
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dogs</th>
          <td>
            <FaDog />
          </td>
          <td>
            <FaDog />
            <FaDog />
          </td>
          <td>
            <FaDog />
            <FaDog />
            <FaDog />
          </td>
          <td>
            <FaDog />
            <FaDog />
            <FaDog />
            <FaDog />
          </td>
          <td>
            <FaDog />
            <FaDog />
            <FaDog />
            <FaDog />
            <FaDog />
          </td>
        </tr>
        <tr>
          <th>Once Weekly</th>
          <td>$75.00/mo</td>
          <td>$85.00/mo</td>
          <td>$95.00/mo</td>
          <td>$105.00/mo</td>
          <td>$115.00/mo</td>
        </tr>
        <tr>
          <th>Twice Weekly</th>
          <td>$115.00/mo</td>
		  <td>$125.00/mo</td>
		  <td>$135.00/mo</td>
		  <td>$145.00/mo</td>
		  <td>$155.00/mo</td>
        </tr>
        <tr>
          <th>Bi-Weekly</th>
          <td>$85.00/mo</td>
		  <td>$95.00/mo</td>
		  <td>$105.00/mo</td>
		  <td>$115.00/mo</td>
		  <td>$125.00/mo</td>
        </tr>
        <tr>
          <th>First Time</th>
          <td>$35 for first 30 mins</td>
		  <td colSpan="4">$1 per each additional minute</td>
        </tr>
        <tr>
          <th>One Time Clean Up</th>
          <td>$60 for first 30 mins</td>
		  <td colSpan="4">$1 per each additional minute</td>
        </tr>
        <tr>
          <td colSpan="6">
            Extra large yards with consistent difficult scooping conditions are subject to additional fees.<br />Monthly rates are based on a 52-week calendar.
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
