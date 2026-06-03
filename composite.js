import fs from "fs";

const file1 = fs.readFileSync("decay_values.txt", "utf8");
const file2 = fs.readFileSync("ray_arrival_times.txt", "utf8");

const decay_values = file1.trim().split("\n").slice(0, 10);
const arrival_times = file2.trim().split("\n").slice(0, 10);

console.log(decay_values);
console.log(arrival_times);


const decay_values_trimmed = []
const arrival_times_trimmed = []

let i = 0 
decay_values.forEach((value) => {
	const d_v = value[value.length -1]
	const a = arrival_times[i]
	const a_v = a[a.length - 1]
	
	decay_values_trimmed.push(a_v)
	arrival_times_trimmed.push(d_v)
	i++ 
})

const ray_bools = decay_values_trimmed.map(d => Number(d) % 2 === 1);
const decay_bools = arrival_times_trimmed.map(d => Number(d) % 2 === 1);

const choices = [];

for (let i = 0; i < ray_bools.length; i++) {
  const a = ray_bools[i];
  const b = decay_bools[i];

  const output = {
    AND: a && b,
    OR: a || b,
    XOR: a !== b
  };

  choices.push(output);
}

console.log(choices);