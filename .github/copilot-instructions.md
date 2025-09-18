# Coding

## File structure

This project uses a feature-sliced modular monolith architecture. The file structure is organized as the follow example:

```md
src/
  app/
    (<feature>)/
      layout.tsx                                  # feature-specific providers lives here
      ...
    (introduction)/
      page.tsx                                    # root page should live inside some kind of introduction feature group
      layout.tsx
    layout.tsx                                    # root providers and layout lives here
  features/
    <feature>/
      presentation/                               # the layer that will be imported by `app/(<feature>)`
        components/
          ui/                                     # pure ui
            qr/
              qr.component.tsx
              qr.provider.tsx
              index.ts
          app/                                    # use `ui` to create presentational-ready components
            qr-list.component.tsx
        server/
          actions/
            user.action.ts
            qr.action/
              qr-create.action.ts
              qr-delete.action.ts
              index.ts
            index.ts
          clients/
            user-authenticated.client.ts
            index.ts
          middlewares/
            user-authenticate.middleware.ts
            index.ts
      logic/
        qr.handler/
          qr-create.handler.ts
          qr-delete.handler.ts
          index.ts
        index.ts
      data/
        schemas/
          users.table.ts
          users.relations.ts
          stores.table.ts
          stores.relations.ts
          index.ts
        sql/
          user.sql.ts
          qr.sql.ts
          index.ts
        clients/
          db-node.client.ts
          index.ts
      types/
        user.type.ts
        index.ts
      index.ts                                    # only export from `presentation`
  shared/
    presentation/
      components/
        ui/
          button/
            button.component.tsx
            button.provider.tsx
            index.ts
        app/
          header.component.tsx
          header-marketing.component.tsx
          footer.component.tsx
          index.ts
        index.ts
      hooks/
        use-theme.hook.ts
        index.ts
      server/
        clients/
          index.ts
        middlewares/
          index.ts
      index.ts
    lib/
      sql/
        operators/
          index.ts
        index.ts
      math/
        clamp.ts
        index.ts
      utils/
        index.ts
    clients/
      db.client/
        db-node.client.ts
        db-edge.client.ts
        db-websocket.client.ts
        index.ts
      ws.client/
        index.ts
      index.ts
    config/
      db/
        db.config.ts
        index.ts
      env/
        env-runtime.env.ts
        env-buildtime.env.ts
        env.config.ts
        index.ts
```

## Naming convention

- For files, follow this pattern: `<scope>[-<variant>][-<functionality>].<type>.ts[x]`