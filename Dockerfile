FROM cannyos/centos

RUN yum install -y epel-release && \
  yum install -y nodejs && \
  yum install -y npm && \
  yum install -y make && \
  yum install -y redis

ADD . /app

RUN cd /app && \
  npm rebuild

ENTRYPOINT ["/start.sh"]
