import axios from "axios";
import fs from "fs";
import path from 'path';

const outputFile = "./decay_values.txt";
const url = "https://data.epa.ie/radmon/api/v1/measurements";

async function fetchData() {

	const res = await axios.get(url);
	return res.data.list.map((measurement) => measurement.value)
}

const result = await fetchData();

fs.writeFileSync(outputFile, result.join("\n"));