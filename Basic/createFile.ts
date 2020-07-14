const encoder = new TextEncoder();

const greetText = encoder.encode("Hello World\n I am learning Deno");

await Deno.writeFile("greet.txt", greetText);
