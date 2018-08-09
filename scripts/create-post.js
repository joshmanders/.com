const {writeFile} = require('fs');
const {join} = require('path');
const stripIndent = require('strip-indent');
const format = require('date-fns/format');

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

const surround = (str, body) => str + body + str;

const toYAML = (obj) => {
  let yaml = '';

  Object.keys(obj).forEach((k) => {
    yaml += `${k}: ${obj[k]}\n`;
  });

  return surround('---\n', yaml);
};

const createPost = async ({draft = false, title = 'Untitled Document'}) => {
  const date = new Date();
  const path = slugify(title);
  const filename = `${draft ? '_DRAFT_' : format(date, 'YYYY-MM-DD')}-${path}.md`;
  const frontmatter = {
    title,
    date: date.toISOString(),
    path,
  };

  if (draft) {
    frontmatter.draft = true;
  }

  return new Promise((resolve, reject) =>
    writeFile(join(__dirname, '..', '_posts', filename), `${toYAML(frontmatter)}\n`, (error) => {
      if (error) {
        return reject(error);
      }

      return resolve(filename);
    })
  );
};

(async ([command, ...args]) => {
  switch (command) {
    case 'post':
    case 'draft':
      return createPost({
        draft: command === 'draft',
        title: args.join(' '),
      });
    case 'help':
    default:
      return stripIndent(`
        Usage:

          post  $title [Creates a new post]
          draft $title [Creates a new draft of a post]
          help         [Prints this output]
      `);
  }
})(process.argv.slice(2))
  .then((res) => process.stdout.write(`${res}\n`))
  .catch((err) => process.stderr.write(`${err}\n`));
