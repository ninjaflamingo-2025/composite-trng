import fs from "fs";
import path from 'path';
import { parse } from "csv-parse/sync";

const folder = './'
const outputFile = "./ray_arrival_times.txt";
const event_times = []

const files = fs.readdirSync(folder)
  .filter(file => file.endsWith(".csv"))
  .map(file => path.join(folder, file));
  
 files.forEach((filepath) => {
	 
	const file = fs.readFileSync(filepath, "utf8")
	
	 
	const rows = parse(file, { 
	  relax_column_count: true,
	  trim: true
	});
	
	rows.shift()
	

	rows.forEach((row) => {
		const data = row[0].trim().split(/\s+/);
		const event_time = data[3]
		event_times.push(event_time)
		
	})
 })

console.log(event_times.length)
fs.writeFileSync(outputFile, event_times.join("\n"));


//const file = fs.readFileSync("IC40_exp.csv", "utf8");
/*
const records = parse(file, { 
  relax_column_count: true,
  trim: true
});


records.forEach((row) => {
	const data = row[0].trim().split(/\s+/);
	const event_time = data[3]
	console.log(event_time)
})

console.log(records[0]);*/