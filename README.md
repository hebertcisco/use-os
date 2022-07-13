<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/use-os/master/.github/images/favicon512x512-linux.png" align="center" alt=":package: use-os" />
 <h2 align="center">:package: use-os</h2>
 <p align="center">Parses browser user-agent strings for React</p>
</p>

<p align="center">Did you like the project? Please, considerate <a href="https://github.com/hebertcisco/hebertcisco/blob/main/.github/patreon.md">being a supporter</a> and receive exclusive gifts!
 </p>

[![codecov](https://codecov.io/gh/hebertcisco/use-os/branch/main/graph/badge.svg?token=i1kYbKJdF7)](https://codecov.io/gh/hebertcisco/use-os)

[![Node.js build and publish package](https://github.com/hebertcisco/use-os/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/hebertcisco/use-os/actions/workflows/npm-publish.yml)

[![Running Code Coverage](https://github.com/hebertcisco/use-os/actions/workflows/coverage.yml/badge.svg)](https://github.com/hebertcisco/use-os/actions/workflows/coverage.yml)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React.js](https://img.shields.io/badge/react-000000?style=flat&logo=react&logoColor=61dbfb)](https://pt-br.reactjs.org/)
[![Free. Built on open source. Runs everywhere.](https://img.shields.io/badge/VS_Code-0078D4?style=flat&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat&logo=githubactions&logoColor=white)](https://github.com/hebertcisco/use-os/actions)

## Installation

Using NPM:

```bash
# Using NPM
npm install --save use-os
```

Using PNPM:

```bash
# Using PNPM
pnpm add use-os
```

Using YARN:

```bash
# Using YARN
yarn add use-os
```

## Using

```jsx
import useOs from 'use-os';
```

In react component:

```jsx
export default function HomePage() {
  const os = useOs();

  return (
    <div>
      {os === 'windows' ? (
        <>
          <b>Windows</b> (.exe)
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
```

## Contribute

> Clone this repository: `git clone https://github.com/hebertcisco/use-os`

### Open the directory and install the dependencies

```bash
cd use-os
npm install
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
