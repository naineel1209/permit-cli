import slugify from "slugify"

export function generateSlug(str: string): string {
  return slugify(str, {
    replacement: "-",
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  })
};