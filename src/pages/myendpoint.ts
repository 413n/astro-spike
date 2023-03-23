export const prerender = true;

export async function get() {
  return {
    body: JSON.stringify({ message: `This is my endpoint` }),
  };
}
