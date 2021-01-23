# unnamed-component-library

An extensive, feature rich, and extensible component library based off of [dripsy](https://github.com/nandorojo/dripsy).

## Why

Most component libraries in the react-native ecosystem provide a great baseline for most use cases. But I often find myself have to incorporate a wide variety of different components from different community made libraries that use different methods of styling/theming.

By using dripsy as the default design-system we are able to leverage so of it's great features inspired by theme-ui like the `sx` prop to style components and fully responsive design using arrays.

To get a better idea of what dripsy is please go here: <https://github.com/nandorojo/dripsy>.

## Goal

The goal of this library is to provide the complete toolkit for building universal applications with react native.

Each component will be able to be controlled centrally through a single theme configuration. This allows the creation of a side variety of presets, extensibility from the base theme, and quick iteration.

As a core principle each component will be broken into the smallest forms possible so that each sub-component that make up more complex component can be styled separately with little more than finding the associated key in the theme file.

It will leverage a combination of components built with dripsy and community driven components extended to work with dripsy to provide a comprehensive and consistent API for a wide variety of components.

On top of that, by leveraging dripsy, this component library should be fully responsive and ready to use on both web and mobile. Hopefully this lends to better cross over between web application, mobile apps, and even marketing sites.

The library should also have great defaults and try to leverage as many system colors as possible but leave room for custom design to deliver consistent yet memorable experiences across different platforms.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
