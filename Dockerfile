FROM node:16.3.0-alpine3.13 as nodejs

# version "alpine-3.14" has some bugs
FROM ruby:2.7.4-alpine3.13

# "build-dependencies" and "build-base" are installed to solve this issue:
#     "to build 'pg' gem with native extensions we have to add build-dependencies and build-base"

# "postgresql-dev" is installed to solve this issue:
#     "No pg_config... trying anyway. If building fails, please try again with"

# "tzdata" is installed to solve this issue:
#     "/usr/local/bundle/gems/tzinfo-2.0.4/lib/tzinfo/data_sources/zoneinfo_data_source.rb:232:in `initialize': None of the paths included in
#     TZInfo::DataSources::ZoneinfoDataSource.search_path are valid zoneinfo directories. (TZInfo::DataSources::ZoneinfoDirectoryNotFound)"

RUN apk add --virtual build-dependencies build-base && apk add postgresql-dev tzdata

# RUN adduser -D my-user
# USER my-user
# WORKDIR /home/my-user/app
# COPY --chown=my-user . /home/my-user/app
WORKDIR /app
COPY . /app

# We need it to chache our gems in vendor/bundle
RUN gem install bundler:2.2.33 \
  && bundle config set path ./vendor/bundle \
  && bundle install

COPY --from=nodejs /usr/local/bin/node /usr/local/bin/
COPY --from=nodejs /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=nodejs /opt/ /opt/

RUN ln -sf /usr/local/bin/node /usr/local/bin/nodejs \
  && ln -sf ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
  && ln -sf ../lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx \
  && ln -sf /opt/yarn*/bin/yarn /usr/local/bin/yarn \
  && ln -sf /opt/yarn*/bin/yarnpkg /usr/local/bin/yarnpkg

RUN yarn install
