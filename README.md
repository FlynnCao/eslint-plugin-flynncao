# eslint-plugin-flynncao

Flynn Cao's ESLint Plugin for Demonstration.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-flynncao`:

```sh
npm install eslint-plugin-flynncao --save-dev
```

## Usage

Add `flynncao` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "flynncao"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "flynncao/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                   | Description                                              |
| :----------------------------------------------------- | :------------------------------------------------------- |
| [mandatory-comments](docs/rules/mandatory-comments.md) | You should write some comments for this kind of function |

<!-- end auto-generated rules list -->


