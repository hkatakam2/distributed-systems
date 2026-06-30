# Backend Distributed Systems Engineer Resources

## Knowledge

- [Book: _Designing Data-Intensive Applications_ — Martin Kleppmann](https://dataintensive.net/)
  Foundational text for storage, replication, partitioning, transactions, batch processing, stream processing, and system tradeoffs. Use for: the conceptual backbone of almost every lesson.
- [Article: "The Log: What every software engineer should know about real-time data's unifying abstraction" — Jay Kreps](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying)
  Clear explanation of logs as a unifying abstraction for databases, messaging, replay, and stream processing. Use for: event-driven architecture and real-time pipelines.
- [Article: "Making retries safe with idempotent APIs" — Malcolm Featonby, Amazon Builders' Library](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/)
  Production explanation of idempotency keys, retries, late-arriving requests, and same-token-different-intent hazards. Use for: safe API write boundaries and retry contracts.
- [Pattern: Transactional Outbox — Chris Richardson, Microservices.io](https://microservices.io/patterns/data/transactional-outbox.html)
  Concise pattern writeup for atomically updating a database and emitting messages without two-phase commit. Use for: reliable event publication from stateful services.
- [Apache Kafka Documentation](https://kafka.apache.org/documentation/)
  Official Kafka docs covering topics, partitions, producers, consumers, replication, delivery, and operations. Use for: durable logs, consumer groups, offsets, ordering, and replay.
- [Apache Kafka Design Documentation](https://kafka.apache.org/43/design/design/)
  Official Kafka design guide covering persistence, producers, consumers, delivery semantics, replication, and log compaction. Use for: explaining why logs, partitions, retention, and replay work the way they do.
- [Apache KafkaConsumer API Documentation](https://kafka.apache.org/43/javadoc/org/apache/kafka/clients/consumer/KafkaConsumer.html)
  Official Java consumer API documentation covering offsets, committed position, consumer groups, rebalancing, poll loops, and manual commits. Use for: precise consumer behavior and recovery semantics.
- [Apache Flink Documentation: Stateful Stream Processing](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/stateful-stream-processing/)
  Official Flink docs on stateful operators, checkpoints, and fault tolerance. Use for: real-time computation, keyed state, windows, exactly-once semantics, and recovery.
- [Apache Flink Documentation: Generating Watermarks](https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/datastream/event-time/generating_watermarks/)
  Official Flink docs on event-time progress and watermark generation. Use for: late data, event-time freshness, out-of-order streams, and window closing behavior.
- [Apache Flink Documentation: Windows](https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/datastream/operators/windows/)
  Official Flink docs on tumbling, sliding, session, and global windows. Use for: finite aggregations over unbounded streams.
- [Apache Flink Documentation: Checkpointing](https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/datastream/fault-tolerance/checkpointing/)
  Official Flink docs on enabling and configuring checkpoint-based fault tolerance. Use for: recovery points, state durability, and checkpoint tradeoffs.
- [Google SRE Book: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)
  Production-oriented framing for symptoms, causes, alerting, and operational signals. Use for: observability and incident response.
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)
  Official docs for traces, metrics, logs, context propagation, and instrumentation. Use for: distributed tracing and cross-service debugging.
- [AWS Well-Architected Framework: Reliability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)
  AWS guidance on failure management, scaling, change management, and recovery. Use for: cloud reliability and production architecture review.
- [Google Research: The Google File System](https://research.google/pubs/the-google-file-system/)
  Classic distributed storage paper. Use for: chunking, replication, failure assumptions, and designing around commodity machine failures.
- [Google Research: Spanner](https://research.google/pubs/spanner-googles-globally-distributed-database/)
  Classic distributed database paper. Use for: consistency, time, replication, and global transactions.
- [Amazon Dynamo Paper](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)
  Classic high-availability key-value storage paper. Use for: quorum, eventual consistency, conflict resolution, and availability tradeoffs.
- [gRPC Documentation](https://grpc.io/docs/)
  Official documentation for RPC, protocol buffers, deadlines, streaming, and service contracts. Use for: service-to-service APIs and backend contracts.
- [Kubernetes Documentation: Concepts](https://kubernetes.io/docs/concepts/)
  Official docs for workloads, services, configuration, storage, and cluster abstractions. Use for: deploying and operating backend services.
- [PostgreSQL Documentation](https://www.postgresql.org/docs/current/)
  Official relational database docs. Use for: indexes, transactions, isolation, query planning, and correctness in stateful systems.
- [Redis Documentation](https://redis.io/docs/latest/)
  Official Redis docs. Use for: caching, data structures, TTLs, memory behavior, and high-speed materialized reads.

## Wisdom (Communities)

- [High Scalability](http://highscalability.com/)
  Architecture writeups and production case studies. Use for: seeing repeated patterns across companies.
- [InfoQ Architecture & Design](https://www.infoq.com/architecture-design/)
  Practitioner talks and articles from senior engineers. Use for: tradeoffs, migrations, and operational lessons.
- [USENIX SREcon](https://www.usenix.org/conferences/byname/925)
  Talks from reliability practitioners. Use for: incident response, observability, and operating complex systems.

## Gaps

- Add company-specific engineering blogs as lessons need them: Stripe, Uber, Netflix, DoorDash, LinkedIn, Meta, Google Cloud, AWS, Cloudflare.
- Add focused papers for consensus, queues, databases, and stream processing when those become the lesson topic.
